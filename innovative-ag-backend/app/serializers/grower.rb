class GrowerSerializer < ActiveModel::Serializer 

    belongs_to :salesman
    has_many :crop_infos

    attributes: :id, :username, :first_name, :last_name, :email, :type, :bio, :pca_id

end