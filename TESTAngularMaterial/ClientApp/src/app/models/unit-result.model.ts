



export class UnitResultModel
{
  constructor()
  {

  }






  public unit: string;


  public decision: string;


  public comment: string;


  public finishedAt?: Date;






  markAsFinished()
  {
    if (!this.finishedAt)
    {
      this.finishedAt = new Date(Date.now());
    }
  }


  hasData()
  {
    return !!this.unit && !!this.decision && this.decision !== 'None';
  }


  isFinished()
  {
    return !!this.hasData() && !!this.finishedAt;
  }



}
