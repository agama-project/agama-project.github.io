#! /usr/bin/env ruby

# patch the URL in the configuration to point to the testing surge.sh URL

def pull_request?
  ENV["GITHUB_EVENT_NAME"] == "pull_request"
end

# make an unique domain name for the preview, based on the branch name or
# the pull request number
def compute_url
  repo_user = ENV["GITHUB_REPOSITORY"].split("/", 2).first

  # use a repo user prefix if this is a fork
  if repo_user == "agama-project"
    repo_user = ""
  else
    repo_user << "-"
  end

  refs = (ENV["GITHUB_REF"] || "").split("/")

  if pull_request?
    # for pull requests the ref is "refs/pull/<pr_number>/merge"
    domain_id = "pull-#{refs[-2]}"
  else
    # for pushes the ref is "refs/heads/<branch_name>"
    domain_id = "#{repo_user}branch-#{refs.last}"
  end

  # make a valid domain name
  domain_id.downcase!
  domain_id.gsub!(/[^a-z0-9]/, "-")
  domain_id.gsub!(/\.\//, "-")

  "https://agama-preview-#{domain_id}.surge.sh"
end

# update the configuration - change the site URL to the preview target
def update_config(new_url)
  conf_file = "docusaurus.config.ts"

  config = File.read(conf_file)
  config.sub!(/url: ".*"/, "url: \"#{new_url}\"")
  
  File.write(conf_file, config)
end

new_url = compute_url
puts "Updating the config to use the #{new_url} target URL..."
update_config(new_url)
