class GrowersController < UserController 

    def show 
        grower = Grower.find_by(id: params[:user_id])
    end

    def new 
        grower = Grower.new(grower_params)
    end

    def create 
        pca = Pca.find_by(id: params[:id])
        new_grower = Grower.new(grower_params)
        grower = pca.new_grower.build(grower_params)
        if grower 
            grower.save 
            render json: grower
        else 
            render json: {error: "Invalid data, please try again"}
        end
    end

    private 

    def grower_params 
        params.require(:grower).permit(:username, :first_name, :last_name, :email, :password_digest, :type, :bio, :pca_id, :grower_id)
    end
end