class PcasController < UsersController  

    def index 
        pcas = Pca.all
        render json: pcas
    end

    def show 
        pca = Pca.find_by(id: params[:user_id])
    end

    def new 
        pca = Pca.new(pca_params)
    end

    def create 
        pca = Pca.new(pca_params) 
        if pca 
            pca.save 
            render json: pca
        else 
            render json: {error: "Invalid entry, please try again Salesman!"}
        end
    end

    private 

    def pca_params 
        params.require(:pca).permit(:username, :first_name, :last_name, :email, :password, :type, :bio, :grower_id, :pca_id)

    end
end
