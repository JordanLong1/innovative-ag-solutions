class UserSerializer < ActiveModel::Serializer
    has_many :messages 

    attributes: :user_id, :username, :first_name, :last_name, :email, :type, :bio, :grower_id, :pca_id
end