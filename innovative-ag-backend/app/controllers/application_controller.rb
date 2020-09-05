class ApplicationController < ActionController::API

       def current_user 
        @current_user ||= User.find_by(id: session[:user_id])
         #saves a hit to the database
    end

    def logged_in?
        !!current_user
    end


    def get_current_user 
        if logged_in? 
            render json: {user: current_user.user_serializer}
        else 
            render json: {error: "There is no current user"}
        end
    end
end
