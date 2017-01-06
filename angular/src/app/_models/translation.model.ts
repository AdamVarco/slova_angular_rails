export class Translation {

  constructor(
    public id?: number,
    public native?: string,
    public target?: string,
    public display?: string,
    public created_at?: string,
    public times_correct?: number,
    public times_incorrect?: number,
    public updated_at?: string,
    public user_id?: number
  ) { }
}
