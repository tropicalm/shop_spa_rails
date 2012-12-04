class AddCategoryToProducts < ActiveRecord::Migration
  def up
  	change_table(:products) do |t|
  		t.references :category
  	end 
  end

  def down
  	change_table(:products) do |t|
  		t.remove_references :category
  	end 
  end  
end
