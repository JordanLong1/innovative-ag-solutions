class SessionsController < ApplicationController 
    
    def create 
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id 
           
            render json: user.user_serializer
        else 
           resp = {
               error: "Error test change later"
           }
            render json: {error: "Username or password is incorrect", status: 404}
        end
    end

    def destroy 
       session.clear

       render json: {
           message: "Successfully cleared logout"         
       }

    end

     def get_current_user 
        if logged_in? 
            render json: current_user.user_serializer
        else 
            render json: {error: "There is no current user"}
        end
    end

end