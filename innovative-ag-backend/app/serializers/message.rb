class MessageSerializer < ActiveModel::Serializer 

    attributes: :id, :content, :seen, :user_id, :grower_id, :pca_id

    belongs_to :grower
    belongs_to :pca
end