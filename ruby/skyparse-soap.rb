#!/usr/bin/env ruby

require 'Savon'
require 'Base64'

# module SkyParse
# 	class GetConsumer
# 		attr_reader :cvLocation, :accountId, :secretKey
# 		@@wsdl = 'https://www.skyparse.com/Parse.svc?wsdl'
# 		
# 		def initialize(cvLocation, accountId, secretKey)
# 			@cvLocation = cvLocation
# 			@accountId = accountId
# 			@secretKey = secretKey
# 			@client = Savon::Client.new
# 		end
# 		
# 		def get_cv ()
# 			Savon.client(wsdl: @@wsdl)
# 		end
# 	end
# end

def get_parsed_cv
	client = Savon::Client.new(wsdl: "https://www.skyparse.com/Parser.svc?wsdl")
	
	client.request :get_parsed_cv do |req|
		req.body = {
			"Request" => {
				"accountID" => "13213",
				"secretKey" => "test",
				"parsedID" => "1008"
			}
		}
	end
end

get_parsed_cv