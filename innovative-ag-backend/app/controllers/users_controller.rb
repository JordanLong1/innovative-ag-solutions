class UsersController < ApplicationController 
    

    # add before action ?
    def show 

        user = User.find_by(id: params[:id])
        render json: user
    end

    def new
        user = User.new(user_params)
    end

    def create 
       binding.pry
        user = User.new(user_params)
        binding.pry
         if user 
            user.save!
            binding.pry
            render json: user 
         else 
            render json: {error: "There is some incorrect info regarding your user information, please try again"}
         end
    end

    private 

    def user_params 
        params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :type, :bio, :pca_id, :grower_id)
    end
end