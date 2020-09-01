class CartInfoSerializer < ActiveModel::Serializer 
    attributes: :name, :description, :amount_of_acres

    belongs_to :grower
end