class Api::ShopController < ApplicationController
	def index
		products = Product.all
		categories = Category.all
		cart = Cart.new(session).products

		render :json => {
			products: products,
			categories: categories,
			cart: cart
		}
	end

	def add_product_to_cart
		product = Product.find(params[:product_id])
		cart = Cart.new(session)
		cart.add_product(product.id)

		render :json => {}
	end

	def remove_product_from_cart
		cart = Cart.new(session)
		cart.remove_product(params[:product_id])

		render :json => {}
	end	

	def place_order
		cart = Cart.new(session)
		products = Product.find(cart.products)
		buyer = Buyer.new
		buyer.first_name = params[:first_name]
		buyer.last_name = params[:last_name]
		#buyer.address = params[:address]
		buyer.save
		buyer.orders.create
		products.each do |product|
			buyer.orders.last.order_items.create(product: product)
		end
		cart.clear

		render :json => {}
	end
end