class CreateTranslations < ActiveRecord::Migration[5.0]
  def change
    create_table :translations do |t|
      t.string :native, null: false
      t.string :target, null: false
      t.string :display, null: false
      t.integer :times_correct, null: false
      t.integer :times_incorrect, null: false

      t.timestamps
    end
  end
end
