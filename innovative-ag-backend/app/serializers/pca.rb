class PcaSerializer < ActiveModel::Serializer

    attributes: :id, :username, :first_name, :last_name, :email, :type, :bio, :password

    has_many :growers 
end