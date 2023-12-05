/*
Function  CUSTOMER_MOD.GET_CART_REVIEW : For getting order review /add_to_cart details

	Description:
	Parameter - Input p_customerid : Existing Customerid
	Parameter - Input p_action_flag : Should be 'H' for getting add_to_cart details and 'B' for Buy now items

	Version		Changed By		Date				Description
	1.0.0.1		Ambika			31.12.2022			Function created 
*/

CREATE OR REPLACE FUNCTION customer_mod.get_cart_review(
	p_customerid integer,
	p_action_flag character varying)
	RETURNS TABLE(customer_name character varying, email character varying, phonenumber integer, prodsubcat character varying, quantity integer, price numeric) 
	LANGUAGE 'plpgsql'

AS $BODY$
DECLARE
VQUERY VARCHAR(225);
begin
		VQUERY:='SELECT C.FNAME||'' ''||MNAME||'' ''||LNAME AS CUSTOMER_NAME,C.EMAIL,C.PHONE_NUMBER,P.DESCRIPTION PRODSUBCAT,
		A.QUANTITY,P.NEW_PRICE*P.QUANTITY AS PRICE
		FROM CUSTOMER_MOD.CUSTOMER C,CUSTOMER_MOD.ADD_TO_CART A,MASTERS.PRODUCTSUBCATEGORY P
		WHERE C.CUSTOMERID=A.CUSTOMERID
		AND UPPER(TRIM(A.PRODSUBCAT))=P.DESCRIPTION
		AND A.CUSTOMERID = '||P_customerid	||'
		AND P.STATUS=''A''
		AND P.ACTION_FLAG='||upper(p_action_flag)||' ;';
	RETURN QUERY EXECUTE VQUERY;
exception
	 WHEN OTHERS THEN
	CALL Masters.Add_To_Syslog('customer_mod.get_cart_review','Error :'||SQLERRM);
end;
$BODY$;
