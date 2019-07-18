#!/usr/bin/ruby -w
require 'sinatra'
require 'mysql'

mysql = Mysql.new("host", "user", "password", "database")
query = mysql.query("SELECT ...")
result = query.fetch_row()
mysql.close

get '/'do
    send_file 'home.html'
end



