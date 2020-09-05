class PcasController < UsersController  

    def index 
        binding.pry
        pcas = Pca.all
        binding.pry
        render json: pcas
    end

    def show 
        pca = Pca.find_by(id: params[:user_id])
    end

    def new 
        pca = Pca.new(pca_params)
    end

    def create 
        binding.pry
        pca = Pca.new(pca_params) 
        binding.pry
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
