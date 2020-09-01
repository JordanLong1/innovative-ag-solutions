class MessageSerializer < ActiveModel::Serializer 

    attributes: :content, :seen 

    belongs_to :grower
    belongs_to :pca
end