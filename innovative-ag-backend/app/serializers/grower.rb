class GrowerSerializer < ActiveModel::Serializer 

    belongs_to :salesman

    attributes: :id, :username, :first_name, :last_name, :email, :type, :bio, :pca_id, :user_id

end