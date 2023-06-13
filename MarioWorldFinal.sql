PGDMP     .                     {            tarea2    15.2    15.2 R    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    26617    tarea2    DATABASE     y   CREATE DATABASE tarea2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE tarea2;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            k           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            l           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            �            1259    27191    Post    TABLE     �   CREATE TABLE public."Post" (
    id integer NOT NULL,
    title text NOT NULL,
    content text,
    published boolean DEFAULT false NOT NULL,
    "authorId" integer NOT NULL
);
    DROP TABLE public."Post";
       public         heap    postgres    false    5            �            1259    27190    Post_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Post_id_seq";
       public          postgres    false    218    5            m           0    0    Post_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;
          public          postgres    false    217            �            1259    27182    User    TABLE     s   CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    name text,
    lastname text
);
    DROP TABLE public."User";
       public         heap    postgres    false    5            �            1259    27181    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    216    5            n           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    215            �            1259    27170    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �            1259    27238    defensas    TABLE     U   CREATE TABLE public.defensas (
    id integer NOT NULL,
    defensa text NOT NULL
);
    DROP TABLE public.defensas;
       public         heap    postgres    false    5            �            1259    27246    defensas_entre_reinos    TABLE     p   CREATE TABLE public.defensas_entre_reinos (
    defensas_id integer NOT NULL,
    reinos_id integer NOT NULL
);
 )   DROP TABLE public.defensas_entre_reinos;
       public         heap    postgres    false    5            �            1259    27237    defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.defensas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.defensas_id_seq;
       public          postgres    false    228    5            o           0    0    defensas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.defensas_id_seq OWNED BY public.defensas.id;
          public          postgres    false    227            �            1259    27260    diplomacias    TABLE     �   CREATE TABLE public.diplomacias (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
    DROP TABLE public.diplomacias;
       public         heap    postgres    false    5            �            1259    27229    karts    TABLE     �   CREATE TABLE public.karts (
    id integer NOT NULL,
    modelo text NOT NULL,
    color text NOT NULL,
    velocidad_maxima integer NOT NULL,
    id_personaje integer NOT NULL
);
    DROP TABLE public.karts;
       public         heap    postgres    false    5            �            1259    27228    karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.karts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.karts_id_seq;
       public          postgres    false    226    5            p           0    0    karts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.karts_id_seq OWNED BY public.karts.id;
          public          postgres    false    225            �            1259    27223    personaje_habita_reino    TABLE     �   CREATE TABLE public.personaje_habita_reino (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(3) without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 *   DROP TABLE public.personaje_habita_reino;
       public         heap    postgres    false    5            �            1259    27209    personaje_tiene_trabajo    TABLE     �   CREATE TABLE public.personaje_tiene_trabajo (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio timestamp(3) without time zone NOT NULL,
    fecha_termino timestamp(3) without time zone NOT NULL
);
 +   DROP TABLE public.personaje_tiene_trabajo;
       public         heap    postgres    false    5            �            1259    27215 
   personajes    TABLE     �   CREATE TABLE public.personajes (
    id integer NOT NULL,
    nombre text NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento timestamp(3) without time zone NOT NULL,
    objeto text NOT NULL
);
    DROP TABLE public.personajes;
       public         heap    postgres    false    5            �            1259    27214    personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.personajes_id_seq;
       public          postgres    false    5    223            q           0    0    personajes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.personajes_id_seq OWNED BY public.personajes.id;
          public          postgres    false    222            �            1259    27252    reinos    TABLE     �   CREATE TABLE public.reinos (
    id integer NOT NULL,
    nombre text NOT NULL,
    ubicacion text NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public.reinos;
       public         heap    postgres    false    5            �            1259    27251    reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reinos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.reinos_id_seq;
       public          postgres    false    5    231            r           0    0    reinos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.reinos_id_seq OWNED BY public.reinos.id;
          public          postgres    false    230            �            1259    27201    trabajos    TABLE     v   CREATE TABLE public.trabajos (
    id integer NOT NULL,
    descripcion text NOT NULL,
    sueldo integer NOT NULL
);
    DROP TABLE public.trabajos;
       public         heap    postgres    false    5            �            1259    27200    trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trabajos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.trabajos_id_seq;
       public          postgres    false    5    220            s           0    0    trabajos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.trabajos_id_seq OWNED BY public.trabajos.id;
          public          postgres    false    219            �           2604    27316    Post id    DEFAULT     f   ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);
 8   ALTER TABLE public."Post" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    27317    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    27318    defensas id    DEFAULT     j   ALTER TABLE ONLY public.defensas ALTER COLUMN id SET DEFAULT nextval('public.defensas_id_seq'::regclass);
 :   ALTER TABLE public.defensas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    27319    karts id    DEFAULT     d   ALTER TABLE ONLY public.karts ALTER COLUMN id SET DEFAULT nextval('public.karts_id_seq'::regclass);
 7   ALTER TABLE public.karts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    27320    personajes id    DEFAULT     n   ALTER TABLE ONLY public.personajes ALTER COLUMN id SET DEFAULT nextval('public.personajes_id_seq'::regclass);
 <   ALTER TABLE public.personajes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    27321 	   reinos id    DEFAULT     f   ALTER TABLE ONLY public.reinos ALTER COLUMN id SET DEFAULT nextval('public.reinos_id_seq'::regclass);
 8   ALTER TABLE public.reinos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    27322    trabajos id    DEFAULT     j   ALTER TABLE ONLY public.trabajos ALTER COLUMN id SET DEFAULT nextval('public.trabajos_id_seq'::regclass);
 :   ALTER TABLE public.trabajos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            V          0    27191    Post 
   TABLE DATA           K   COPY public."Post" (id, title, content, published, "authorId") FROM stdin;
    public          postgres    false    218   a       T          0    27182    User 
   TABLE DATA           ;   COPY public."User" (id, email, name, lastname) FROM stdin;
    public          postgres    false    216   4a       R          0    27170    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   Qa       `          0    27238    defensas 
   TABLE DATA           /   COPY public.defensas (id, defensa) FROM stdin;
    public          postgres    false    228   ,b       a          0    27246    defensas_entre_reinos 
   TABLE DATA           G   COPY public.defensas_entre_reinos (defensas_id, reinos_id) FROM stdin;
    public          postgres    false    229   �b       d          0    27260    diplomacias 
   TABLE DATA           H   COPY public.diplomacias (id_reino_1, id_reino_2, es_aliado) FROM stdin;
    public          postgres    false    232   �b       ^          0    27229    karts 
   TABLE DATA           R   COPY public.karts (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    226   �b       \          0    27223    personaje_habita_reino 
   TABLE DATA           g   COPY public.personaje_habita_reino (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    224   zc       Y          0    27209    personaje_tiene_trabajo 
   TABLE DATA           h   COPY public.personaje_tiene_trabajo (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    221   �c       [          0    27215 
   personajes 
   TABLE DATA           R   COPY public.personajes (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    223   Ed       c          0    27252    reinos 
   TABLE DATA           C   COPY public.reinos (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    231   �e       X          0    27201    trabajos 
   TABLE DATA           ;   COPY public.trabajos (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    220   3f       t           0    0    Post_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Post_id_seq"', 1, false);
          public          postgres    false    217            u           0    0    User_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."User_id_seq"', 1, false);
          public          postgres    false    215            v           0    0    defensas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.defensas_id_seq', 5, true);
          public          postgres    false    227            w           0    0    karts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.karts_id_seq', 25, true);
          public          postgres    false    225            x           0    0    personajes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.personajes_id_seq', 19, true);
          public          postgres    false    222            y           0    0    reinos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.reinos_id_seq', 6, true);
          public          postgres    false    230            z           0    0    trabajos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.trabajos_id_seq', 6, true);
          public          postgres    false    219            �           2606    27199    Post Post_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Post" DROP CONSTRAINT "Post_pkey";
       public            postgres    false    218            �           2606    27189    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    216            �           2606    27178 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    27250 0   defensas_entre_reinos defensas_entre_reinos_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.defensas_entre_reinos
    ADD CONSTRAINT defensas_entre_reinos_pkey PRIMARY KEY (defensas_id, reinos_id);
 Z   ALTER TABLE ONLY public.defensas_entre_reinos DROP CONSTRAINT defensas_entre_reinos_pkey;
       public            postgres    false    229    229            �           2606    27245    defensas defensas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.defensas
    ADD CONSTRAINT defensas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.defensas DROP CONSTRAINT defensas_pkey;
       public            postgres    false    228            �           2606    27264    diplomacias diplomacias_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_pkey PRIMARY KEY (id_reino_1, id_reino_2);
 F   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_pkey;
       public            postgres    false    232    232            �           2606    27236    karts karts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_pkey;
       public            postgres    false    226            �           2606    27227 2   personaje_habita_reino personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_pkey PRIMARY KEY (id_personaje, id_reino);
 \   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_pkey;
       public            postgres    false    224    224            �           2606    27213 4   personaje_tiene_trabajo personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_pkey PRIMARY KEY (id_trabajo, id_personaje);
 ^   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_pkey;
       public            postgres    false    221    221            �           2606    27222    personajes personajes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.personajes
    ADD CONSTRAINT personajes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.personajes DROP CONSTRAINT personajes_pkey;
       public            postgres    false    223            �           2606    27259    reinos reinos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.reinos
    ADD CONSTRAINT reinos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.reinos DROP CONSTRAINT reinos_pkey;
       public            postgres    false    231            �           2606    27208    trabajos trabajos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.trabajos
    ADD CONSTRAINT trabajos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.trabajos DROP CONSTRAINT trabajos_pkey;
       public            postgres    false    220            �           1259    27265    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    216            �           2606    27266    Post Post_authorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 E   ALTER TABLE ONLY public."Post" DROP CONSTRAINT "Post_authorId_fkey";
       public          postgres    false    216    218    3237            �           2606    27296 <   defensas_entre_reinos defensas_entre_reinos_defensas_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.defensas_entre_reinos
    ADD CONSTRAINT defensas_entre_reinos_defensas_id_fkey FOREIGN KEY (defensas_id) REFERENCES public.defensas(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 f   ALTER TABLE ONLY public.defensas_entre_reinos DROP CONSTRAINT defensas_entre_reinos_defensas_id_fkey;
       public          postgres    false    228    3251    229            �           2606    27301 :   defensas_entre_reinos defensas_entre_reinos_reinos_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.defensas_entre_reinos
    ADD CONSTRAINT defensas_entre_reinos_reinos_id_fkey FOREIGN KEY (reinos_id) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 d   ALTER TABLE ONLY public.defensas_entre_reinos DROP CONSTRAINT defensas_entre_reinos_reinos_id_fkey;
       public          postgres    false    231    3255    229            �           2606    27306 '   diplomacias diplomacias_id_reino_1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_1_fkey FOREIGN KEY (id_reino_1) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_1_fkey;
       public          postgres    false    231    232    3255            �           2606    27311 '   diplomacias diplomacias_id_reino_2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_2_fkey FOREIGN KEY (id_reino_2) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_2_fkey;
       public          postgres    false    232    3255    231            �           2606    27291    karts karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 G   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_id_personaje_fkey;
       public          postgres    false    3245    226    223            �           2606    27281 ?   personaje_habita_reino personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_personaje_fkey;
       public          postgres    false    224    3245    223            �           2606    27286 ;   personaje_habita_reino personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 e   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_reino_fkey;
       public          postgres    false    3255    231    224            �           2606    27276 A   personaje_tiene_trabajo personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 k   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey;
       public          postgres    false    223    221    3245            �           2606    27271 ?   personaje_tiene_trabajo personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey FOREIGN KEY (id_trabajo) REFERENCES public.trabajos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey;
       public          postgres    false    221    3241    220            V      x������ � �      T      x������ � �      R   �   x���KJAD�ݧ�d����Cx��!��
Dq���Q��B�/�hi4��xM��	Y� �kk�ͦ,-sv��J�᳚f+�F7�sG��:t$)�IR�[gf9tadt �0����9�E'A�P���|]�Og�MMIN���h��'Po)�A��QF��_��]��e�?ƿ���w���%�??�A�����u�<e]#      `   F   x�3�tN<�1?/�X!%U!���(5''��ˈ�)3'G�)1'�˘�-1�$�8(n������������ ���      a      x�3�4�2�4�2�4����� �      d   "   x�3�4�,�2�4�F@v�4��`�=... btX      ^   �   x�U�A
�0DדS��Ĥ{EA(����'�ZM�%�oo� u;�13���]�� �6=�.F��2B+�:�߲�t�
G�3�5����H}������M�H�1T5kk�e"���o��6h�/�Zh���Y.��8��(�6�      \   [   x�uл�0���n
 �sy �Pg��/��/��
[��JD;C;G��c���D�(�
��VA��
�E�����7(-�*SZ��4���� qO�      Y   P   x��б�@�ڙ�������s�(�ɕu�eA�Ny�F^_�nй\�ߙ�����Q��a���U�Q�����ҎG�      [   s  x�u�Kn�0���� ���@�h��PUU�fDL02��qz�����&j(Yd���?�%�N�@$D��%.�=��n9^(>۩�X9:M E����q����,��N��&L�τ��u��np9YU ��l�2Y}��(�1�,Ͷ}mi-��y/�f���Sex��.��X���?�����I3~���x�߅W��5�g��N��*ßhAG��~C+��ɨ-q|K�T� ��ת�5�Ǟ�9��x��a1�.U�ܖ �����/,�}tN&�0�EQ�nM���a>h��.k�Iĩ�l��)�qg�U Cf�t��:���u;���VU�l|�Z��`�|�+�T�~�!{�b��F���      c   [   x�3�J���Wp�H�-�<�1?�3 '1/�$Y��������;?� �*cN��r���l�̒J��Т�ļ|�
�Xd~qF&Nsb���� �Q3�      X   �   x�E�A
1E��)r���q-�A\��m�b'��]x(O���������Ɲ�L�;8rmX��JOT�Z��~�X�:��w����\��:�f|4�u1��Y�B^t��̲�?�=MR(�B"���9f���T��O7��u���7�     