class User < ApplicationRecord
    

    # has_many :messages
    has_secure_password

    validates :username, :email, uniqueness: true
    validates :username, :first_name, :last_name, :email, :password_digest, :type, :bio, presence: true


    def user_serializer
      {
        username: username, 
        email: email, 
        first_name: first_name, 
        last_name: last_name, 
        type: type, 
        bio: bio,
        id: id, 
        password: password

      }

    end

    def as_json(options={})
    super(options.merge({:methods => :type}))
  end



end
