class PcasController < UserController  

    def show 
        pca = Pca.find_by(id: params[:user_id])
    end

    def new 
        pca = Pca.new(user_params)
    end

    def create 
        pca = Pca.new(user_params) 
        if pca 
            pca.save 
            render json: pca
        else 
            render json: {error: "Invalid entry, please try again Salesman!"}
        end
    end

    private 

    def user_params 
        params.require(:user).permit(:username, :first_name, :last_name, :email, :password_digest, :type, :bio)

    end
end
