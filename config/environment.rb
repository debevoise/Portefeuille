# Load the Rails application.
require_relative 'application'

# IEX::Api.configure do |config|
#   config.publishable_token = 'pk_447f5b36aa644265ad3cc114da2a01a9' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
#   config.endpoint = 'https://cloud.iexapis.com/v1' # defaults to 'https://cloud.iexapis.com/v1'
# end
# Initialize the Rails application.
Rails.application.initialize!

# client = IEX::Api::Client.new(
#   publishable_token: 'pk_447f5b36aa644265ad3cc114da2a01a9',
#   endpoint: 'https://cloud.iexapis.com/v1'
# )