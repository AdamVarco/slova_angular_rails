class CreateTranslations < ActiveRecord::Migration[5.0]
  def change
    create_table :translations do |t|
      t.string :native
      t.string :target
      t.datetime :created_at
      t.string :display
      t.integer :times_correct
      t.integer :times_incorrect

      t.timestamps
    end
  end
end
