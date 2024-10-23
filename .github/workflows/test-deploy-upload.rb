#! /usr/bin/env ruby

# Publish the page preview at surge.sh using the "surge" tool
# See https://surge.sh/help/getting-started-with-surge
# The access tokens are set at
# https://github.com/agama-project/agama-project.github.io/settings/secrets/actions
# For security reasons this does not work across forks.
# Additionally it reports the status and the target URL back to GitHub.

require "shellwords"
require "uri"

# secure variable not present, cannot deploy
if ENV["SURGE_TOKEN"].to_s.empty?
  puts "Cannot deploy a preview, the required surge.sh token is not set!"
  puts "Create a surge.sh token and pass it as the SURGE_TOKEN secret."
  puts
  puts "See https://surge.sh/help/getting-started-with-surge."
  exit 0
end

def pull_request?
  ENV["GITHUB_EVENT_NAME"] == "pull_request"
end

# set GitHub commit status
def set_status(success, url)
  sha = ENV["GITHUB_SHA"]
  repo = ENV["GITHUB_REPOSITORY"]
  context = pull_request? ? "site-preview/pr" : "site-preview/commit"
  state = success ? "success" : "failure"

  cmd = ["gh", "api", "--method", "POST", "-H", "Accept: application/vnd.github+json",
    "/repos/#{repo}/statuses/#{sha}", "-f", "state='#{state}'", "-f", "context='#{context}'"]

  if success
    cmd += ["-f", "target_url='#{url}'"]
    description = pull_request? ? "PR Preview" : "Branch Preview"
  else
    description = "Preview failed!"
  end

  cmd += ["-f" , "description='#{description}'"]

  system(*cmd)
end

# update the configuration - change the site URL to the preview target
def url_from_config
  conf_file = "docusaurus.config.ts"

  config = File.read(conf_file)
  url = config.match(/^\s*url: "(.*)"/)[1]
end

url = url_from_config
domain = URI(url_from_config).host
puts "Publishing the pages at #{url}..."

if system("npx surge --project ./build --domain #{domain.shellescape}")
  set_status(true, url)
  puts "\nFinished, see the #{url} page for the site preview."
else
  set_status(false, url)
  exit 1
end
