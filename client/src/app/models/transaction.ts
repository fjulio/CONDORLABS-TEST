export class Transaction{
	
	constructor(
		public cd_cebroker_state: string,
		public pro_code: number,
		public code_profesion : string,
		public id_license: string,
		public dt_end_log: string,
		public code_enverionment : string,
		public dt_Start_Log: string,
		public status_returned: string,
		public code_machine : string,
		public id_client: string,
		public current_date: string
	){

	}
}