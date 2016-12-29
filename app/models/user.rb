class User < ApplicationRecord
  devise :database_authenticatable, :recoverable,
          :registerable, :rememberable,
          :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  validates :email, presence: true

  def send_on_create_confirmation_instructions
    return "Welcome to Slova."
    # send_devise_notification(:confirmation_instructions)
  end
end
