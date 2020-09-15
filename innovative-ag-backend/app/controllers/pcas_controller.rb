class PcasController < UsersController  

    def index 
        pcas = Pca.all
        render json: pcas
    end

    def show 
        p = Pca.find_by(id: params[:id])
        grower_info = p.growers
       pca = grower_info.each do |grower| 
             grower.crop_infos.each do |crop| 
                crop.name 
                crop.description 
                crop.amount_of_acres
                binding.pry
            end
        end
        binding.pry
        render json: pca
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
        params.require(:pca).permit(:id, :username, :first_name, :last_name, :email, :password, :type, :bio, :grower_id, :pca_id)

    end
end
