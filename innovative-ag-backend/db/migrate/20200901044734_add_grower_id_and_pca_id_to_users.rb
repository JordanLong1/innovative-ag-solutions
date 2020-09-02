class AddGrowerIdAndPcaIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :grower_id, :integer
    add_column :users, :pca_id, :integer
  end
end
