#! /usr/bin/env ruby

# Publish the page preview at surge.sh using the "surge" tool
# See https://surge.sh/help/getting-started-with-surge
# The access tokens are set at
# https://github.com/agama-project/agama-project.github.io/settings/secrets/actions
# For security reasons this does not work across forks.
# Additionally it reports the status and the target URL back to GitHub.

# require "octokit"
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

# # create an Octokit client for communication with GitHub
# def client
#   return @client if @client
#   @client = Octokit::Client.new(:access_token => ENV["GH_STATUS_TOKEN"])
#   @client
# end

# # set GitHub status
# def set_status(status, description)
#   sha = ENV["GITHUB_SHA"]
#   repo = ENV["GITHUB_REPOSITORY"]

#   opts = {
#     description: description
#   }
#   opts[:target_url] = url if status == "success"
#   opts[:context] = pull_request? ? "site-preview-pr" : "site-preview"

#   puts "Setting GitHub status, repo: #{repo}, sha: #{sha}, status: #{status}, opts: #{opts.inspect}"

#   client.create_status(repo, sha, status, opts)
# end

# # report success at GitHub
# def report_success
#   set_status("success", pull_request? ? "PR Preview" : "Branch Preview")
# end

# # report failure at GitHub and exit
# def report_failure_and_exit
#   set_status("failure", "Preview failed!")
#   exit 1
# end

# update the configuration - change the site URL to the preview target
def url_from_config
  conf_file = "docusaurus.config.ts"

  config = File.read(conf_file)
  url = config.match(/^\s*url: "(.*)"/)[1]
end

url = url_from_config
domain = URI(url_from_config).host
puts "Publishing the pages at #{url}..."

system("npx surge --project ./build --domain #{domain.shellescape}")

# report_failure_and_exit unless system("npx surge --project ./build --domain #{domain}")

# report_success
# puts "\nFinished, see the #{url} page for the site preview."

