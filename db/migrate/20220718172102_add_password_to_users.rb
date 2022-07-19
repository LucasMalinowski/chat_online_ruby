class AddPasswordToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :password, :string

    add_index :users, [:email, :name], unique: true
  end
end
