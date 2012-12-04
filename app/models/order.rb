class Order < ActiveRecord::Base
	attr_accessible :order_items, :buyer, :confirmed
	scope :recent, where(confirmed: false)
	
	has_many :order_items
	belongs_to :buyer
end