class IndexController < ApplicationController

    def show
    end
    
    def getmessages
        @messages = Message.all
        render json: { message: @messages[rand(@messages.length)].name }
    end
end
