class CropInfoSerializer < ActiveModel::Serializer 
    attributes: :id, :name, :description, :amount_of_acres, :grower_id

    belongs_to :grower
end