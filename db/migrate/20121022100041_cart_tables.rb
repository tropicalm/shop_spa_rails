class CartTables < ActiveRecord::Migration
  def change
  	create_table :buyers do |t|
  		t.string :first_name
  		t.string :last_name

  		t.timestamps
  	end

  	create_table :orders do |t|
  		t.integer :buyer_id

  		t.timestamps
  	end

  	create_table :order_items do |t|
  		t.integer :order_id
  		t.integer :product_id
  		t.integer :quantity
  		t.decimal :price, :precision => 8, :scale => 2

  		t.timestamps
  	end
  end
end
