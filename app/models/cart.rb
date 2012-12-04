class Cart
	def initialize(session)
		@session = session
		@session[:product_ids] ||= []
	end

	def add_product(product)
		@session[:product_ids] << product
		@session[:product_ids].uniq!
	end

	def remove_product(product)
		@session[:product_ids].delete(Integer(product))
	end

	def products
		@session[:product_ids]
	end

	def clear
		@session[:product_ids] = []
	end
end