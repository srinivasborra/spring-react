package com.test.pwd.controller;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.eclipse.jetty.util.security.Credential;

public class OBFPasswordGenerator extends Credential{
	
	 public static final String __OBFUSCATE = "OBF:";

	    private String _pw;
	
	public OBFPasswordGenerator(String password)
    {
        _pw=password;
        
        // expand password
        while (_pw!=null && _pw.startsWith(__OBFUSCATE))
            _pw=deobfuscate(_pw);
    }  

	public static String obfuscate(String s)
    {
        StringBuffer buf = new StringBuffer();
        byte[] b = s.getBytes();
        
        synchronized(buf)
        {
            buf.append(__OBFUSCATE);
            for (int i=0;i<b.length;i++)
            {
                byte b1 = b[i];
                byte b2 = b[s.length()-(i+1)];
                int i1= 127+b1+b2;
                int i2= 127+b1-b2;
                int i0=i1*256+i2;
                String x=Integer.toString(i0,36);

                switch(x.length())
                {
                  case 1:buf.append('0');
                  case 2:buf.append('0');
                  case 3:buf.append('0');
                  default:buf.append(x);
                }
            }
            return buf.toString();
        }
    }
	
	public static String deobfuscate(String s)
    {
        if (s.startsWith(__OBFUSCATE))
            s=s.substring(4);
        
        byte[] b=new byte[s.length()/2];
        int l=0;
        for (int i=0;i<s.length();i+=4)
        {
            String x=s.substring(i,i+4);
            int i0 = Integer.parseInt(x,36);
            int i1=(i0/256);
            int i2=(i0%256);
            b[l++]=(byte)((i1+i2-254)/2);
        }

        return new String(b,0,l);
    }
	
	public static void main(String[] arg) {
			String p ="Welcome123";
	        OBFPasswordGenerator pw = "?".equals(p)?new OBFPasswordGenerator(p):new OBFPasswordGenerator(p);
	        System.err.println(pw.toString());
	        System.err.println(obfuscate(pw.toString()));
	        System.err.println(Credential.MD5.digest(p));
	        if (arg.length==2)
	            System.err.println(Credential.Crypt.crypt(arg[0],pw.toString()));
	        
	    }
	

	@Override
	public boolean check(Object arg0) {
		// TODO Auto-generated method stub
		return false;
	}    
	public static OBFPasswordGenerator getPassword(String realm,String dft, String promptDft)
    {
        String passwd=System.getProperty(realm,dft);
        if (passwd==null || passwd.length()==0)
        {
            try
            {
                System.out.print(realm+
                                 ((promptDft!=null && promptDft.length()>0)
                                  ?" [dft]":"")+" : ");
                System.out.flush();
                byte[] buf = new byte[512];
                int len=System.in.read(buf);
                if (len>0)
                    passwd=new String(buf,0,len).trim();
            }
            catch(IOException e)
            {
                System.out.println(e.getMessage());
            }
            if (passwd==null || passwd.length()==0)
                passwd=promptDft;
        }
        return new OBFPasswordGenerator(passwd);
    }
}
