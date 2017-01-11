class AddNativeLanguageToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :native_lang, :string
  end
end
