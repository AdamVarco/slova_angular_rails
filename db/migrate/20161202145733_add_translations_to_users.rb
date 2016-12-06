class AddTranslationsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :translations, :user_id, :integer
    add_index :translations, :user_id
  end
end
