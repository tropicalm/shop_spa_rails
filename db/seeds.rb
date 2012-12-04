# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'

10.times do 
	Category.create(name: Faker::Lorem.words(1+rand(2)).join(" ").capitalize)
end

categories = Category.all

100.times do
	p = Product.new()
	p.name = Faker::Lorem.words(2+rand(4)).join(" ").capitalize
	p.description = Faker::Lorem.paragraph(5)
	p.category = categories.sample
	p.price = 1 + rand(200)
	p.save
end