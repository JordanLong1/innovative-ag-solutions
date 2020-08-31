class CreateCropInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :crop_infos do |t|
      t.string :name
      t.string :description
      t.integer :amount_of_acres

      t.timestamps
    end
  end
end
