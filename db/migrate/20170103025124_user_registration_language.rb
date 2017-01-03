class UserRegistrationLanguage < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :target_lang, :string
  end
end
