# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stock.destroy_all

file = File.open('/Users/work/Desktop/portfolio/Portefeuille/db/NYSE.txt')
file_data = file.readlines.map(&:chomp)

file_data.each do |line|
    ticker, company = line.split("\t")
    Stock.create!(ticker: ticker, company: company)
end