#!/usr/bin/ruby -w

require 'sinatra'

get '/hi'do
    "<h2 style='text-align:center'>Sinatra Works!</h2>"
end
