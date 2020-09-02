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
        user = User.new(user_params)
         if user && user.authenticate(password: params[:password_digest])
            user.save 
            session[:user_id] = user.id 
            render json: user 
         else 
            render json: {error: "There is some incorrect info regarding your user information, please try again"}
         end
    end

    private 

    def user_params 
        params.require(:user).permit(:username, :first_name, :last_name, :email, :password_digest, :type, :bio)
    end
end