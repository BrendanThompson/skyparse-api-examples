#! /usr/bin/env ruby

require 'rest_client'

response = RestClient.get 'https://www.skyparse.com/api/hrxml', {:params => {:accountID => '13213', :secretKey => 'test', :parseID => '1008'}}
response.code