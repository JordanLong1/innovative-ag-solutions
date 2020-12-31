class ApplicationController < ActionController::API

       def current_user 
       begin 
        current_user ||= User.find_by(id: session[:user_id])

       rescue 
        return nil
       end
       end
         #saves a hit to the database


    def logged_in?
        !!current_user
    end

        def fallback_index_html
          render :file => 'public/index.html'
        end


end
