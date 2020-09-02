class AddGrowerIdToCropInfos < ActiveRecord::Migration[6.0]
  def change
    add_column :crop_infos, :grower_id, :integer
  end
end
