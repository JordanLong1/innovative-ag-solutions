class AddGrowerIdAndPcaIdToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :grower_id, :integer
    add_column :messages, :pca_id, :integer
  end
end
