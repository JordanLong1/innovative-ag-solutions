class User < ApplicationRecord
    

    # has_many :messages
    has_secure_password

    # validates :username, :email, uniqueness: true
    # validates :username, :first_name, :last_name, :email, :password_digest, :type, :bio, presence: true

    def as_json(options={})
    super(options.merge({:methods => :type}))
  end

end
