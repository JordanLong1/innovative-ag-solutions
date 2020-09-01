class UserSerializer < ActiveModel::Serializer
    has_many :messages 

    attributes: :username, :first_name, :last_name, :email, :type, :bio
end